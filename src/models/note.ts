import { InferSchemaType, model, Schema } from 'mongoose'

const noteSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, require: true },
    title: { type: String, required: true },
    text: { type: String, required: false }
  },
  { timestamps: true }
)

type Note = InferSchemaType<typeof noteSchema>

export default model<Note>('Note', noteSchema)
