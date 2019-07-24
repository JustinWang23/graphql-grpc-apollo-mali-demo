import { GrpcObject, loadPackageDefinition, credentials, Client } from 'grpc'
import { loadSync } from '@grpc/proto-loader'
import * as grpc_promise from 'grpc-promise'
import { resolve } from 'path'

class GrpcClient {
  protected stub: GrpcObject
  protected serverUrl: string
  protected packageName: string
  protected protoPath: string

  constructor(server_url: string, package_name: string, proto_path: string) {
    this.serverUrl = server_url
    this.packageName = package_name
    this.protoPath = proto_path
    this.stub = this.loadProto()
  }

  protected loadProto(): GrpcObject {
    const packageDefinition = loadSync(resolve(__dirname, '../../../protos', this.protoPath), {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    })
    return loadPackageDefinition(packageDefinition)
  }

  getService(name: string): Client {
    const service = new (this.stub[this.packageName] as any)[name](
      this.serverUrl,
      credentials.createInsecure(),
    )
    grpc_promise.promisifyAll(service)
    return service
  }
}

export { GrpcClient }