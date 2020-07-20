import kinesalite from 'kinesalite';
import { Server } from 'http';

let server: Server;

beforeAll(() => {
    server = kinesalite({createStreamMs: 0, deleteStreamMs: 0});
})

afterAll(() => {
    server.close()
})
