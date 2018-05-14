import { Document, model, Model, Schema } from 'mongoose';
const { Types } = Schema;

type FeeType = { total: any } & Base.Versionable<{}>;
export const feeSchema: FeeType = {
    total: Types.Number,
    current: new Schema({
        ammout: Types.Number,
        date: Types.Date
    }),
    previous: [{
        ammout: Types.Number,
        date: Types.Date
    }]
};
const FeeSchema = new Schema(
    (feeSchema as FeeType),
    { _id: false, timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

export type FeeDocumentType = { total: number } & Versionable<Model.IFee> & Document;
interface FeeSchemaMethods { }
type FeeSchemaType = FeeDocumentType & FeeSchemaMethods;
type FeeModelType = Model<FeeSchemaType>;

const Fee: FeeModelType = model<FeeSchemaType, FeeModelType>('Fee', FeeSchema);

export default Fee;
