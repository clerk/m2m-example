# Clerk M2M Tokens Example

A simple example of how to use M2M tokens with Clerk, using express.

### Running the example

- Head to the Clerk dashboard, to [machine config](https://dashboard.clerk.com/last-active?path=machines)
- Create two machines, called Machine A and Machine B. Make sure that the access scopes for Machine A include Machine B and vice versa. It should look [something like this](https://p176.p0.n0.cdn.zight.com/items/7KurL6Kx/ae284282-258e-43ea-8cb6-4a4ed1f87540.png?v=4eb6a0b199b0b3887c6c17b29e663c43).
- Create a `.env` file in the `/machine-a` and `/machine-b` folders in this repo with `cp machine-a/.env.sample machine-a/.env && cp machine-b/.env.sample machine-b/.env`
- Add the machine secrets from your Clerk dashboard into the `.env` files
- Run `npm start` to start the servers for machines A and B
- In your browser, open `http://localhost:3000/send` to trigger machine A to send a request to machine B. You should see a response with a verified token.
