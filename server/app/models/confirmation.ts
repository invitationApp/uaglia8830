/// <reference path="../../../index.d.ts"/>
import { Document, model, Model, Schema } from 'mongoose';
const { Types } = Schema;

type ConfirmationType = Base.Versionable<{}>;
export const confirmationSchema: ConfirmationType = {
    current: new Schema({
        feedback: Types.String,
        status: Types.Number,
    }),
    previous: [{
        feedback: Types.String,
        status: Types.Number,
    }],
};
const ConfirmationSchema = new Schema(
    (confirmationSchema as ConfirmationType),
    { _id: false, timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

export type ConfirmationDocumentType = Versionable<Model.IConfirmation> & Document;
interface ConfirmationSchemaMethods { }
type ConfirmationSchemaType = ConfirmationDocumentType & ConfirmationSchemaMethods;
type ConfirmationModelType = Model<ConfirmationSchemaType>;
const Confirmation: ConfirmationModelType =
    model<ConfirmationSchemaType, ConfirmationModelType>('Confirmation', ConfirmationSchema);
export default Confirmation;
