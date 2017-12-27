import Route from './Route';

export default class RouteTest extends Route {
    constructor(params) {
        super({ ...params });
    }

    // get route: http://localhost:3000/users/get/:id
    @Route.Get({
        path: 'get/:id' // as we defined a segment in the path (:id), the value entered in the url will be available as ctx.params.id
    })
    async get(ctx) {
        this.sendOk(ctx, ctx.params.id); // we simply return the parameter
    }

    // post route: http://localhost:3000/users/add
    @Route.Post({
        params: { // params to allow: all other params will be rejected
            email: true, // return a 400 if the body doesn't contain email key
            name: false, // name is optional
        },
    })
    async add(ctx) {
        const body = this.body(ctx); // or ctx.request.body
        // body can contain only an object with email and name field
        this.sendCreated(ctx, body); // helper function which sets the status to 201 and return the parameter
    }

    @Route.Get({
        before: [ // Array of middlewares
            async (ctx, next) => {
                console.log("I'm the first");
                await next();
            },
            async (ctx, next) => {
                console.log("I'm the second");
                await next();
            }
        ],
        after: [ // Array of middlewares
            async (ctx/*, next*/) => {
                console.log("I'm the last");
            }
        ]
    })
    async view(ctx, next) {
        console.log("I'm the third");
        this.sendOk(ctx, null, ctx.state.__('hello'));
        await next(); // don't forget to await "next" to allow the "after" middleware's execution.
    }

}
