export default interface ICloudService {
    readonly file: string
    readonly folder: string

    upload(): Promise<any>
}
