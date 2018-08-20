
import { PlaceholderService, Post } from './placeholder.service';
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

describe('Provider: Conferences Service', () => {

    let placeholderService: PlaceholderService;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PlaceholderService
            ],
            imports: [
                HttpClientTestingModule
            ]
        });
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
        placeholderService = TestBed.get(PlaceholderService);
    });

    afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(placeholderService).toBeTruthy(); // We hope the service has been inyected and defined
    });

    it('should be able to add a new post', () => {
        const submitedPost: Post = {
            id: 101,
            title: 'foo',
            body: 'bar',
            userId: 1
        }
        const expectedPostResponse: Post = {
            id: 101,
            ...submitedPost
        };
        placeholderService
            .addPost(submitedPost)
            .subscribe((response) => {
                expect(response.id).toBe(101);
            });
        const req = httpTestingController.expectOne(placeholderService.endpointURL + 'posts');
        expect(req.request.method).toEqual('POST');
        // Respond with the mock conferences
        req.flush(expectedPostResponse);
    });
});