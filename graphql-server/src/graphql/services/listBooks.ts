import { GrpcClient } from '../../grpc'

const listBooksClient: any = new GrpcClient('0.0.0.0:50051', 'book', 'books.proto').getService('BookService')

export { listBooksClient }