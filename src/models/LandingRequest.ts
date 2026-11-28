import mongoose, { Document, Schema } from "mongoose";

export interface ILandingRequest extends Document {
  name: string;
  email: string;
  phone: string;
  status: "requested" | "real" | "need contact" | "contacted" | "confirm" | "need to contact again" | "ordered" | "processing" | "ready to deliver" | "delivered" | "paid" | "canceled" | "fake" | "hot" | "need followup" | "a" | "b" | "c" | "d";
  source: string;
  price: number;
  details?: string;
  projectTitle?: string;
  proposalUrl?: string;
  freeOffered: boolean;
  contactedToday: boolean;
  quickNote?: string;
  credential?: string;
  lastContacted?: Date;
  paymentNumber?: string;
  payment?: number;
  renewFee?: number;
  renewDate?: Date;
  fbp?: string;
  fbc?: string;
  clientIp?: string;
  clientUserAgent?: string;
  eventSourceUrl?: string;
  purchaseEventSent?: boolean;
  purchaseEventSentAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const LandingRequestSchema = new Schema<ILandingRequest>(
  {
    name: {
      type: String,
      trim: true,
      default: "New Lead",
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["requested", "real", "need contact", "contacted", "confirm", "need to contact again", "ordered", "processing", "ready to deliver", "delivered", "paid", "canceled", "fake", "hot", "need followup", "a", "b", "c", "d"],
      default: "requested",
    },
    source: {
      type: String,
      default: "ecommerce-landing-page",
    },
    price: {
      type: Number,
      default: 3500,
    },
    details: {
      type: String,
    },
    projectTitle: {
      type: String,
      trim: true,
    },
    proposalUrl: {
      type: String,
      trim: true,
    },
    freeOffered: {
      type: Boolean,
      default: false,
    },
    contactedToday: {
      type: Boolean,
      default: false,
    },
    quickNote: {
      type: String,
      trim: true,
    },
    credential: {
      type: String,
      trim: true,
    },
    lastContacted: {
      type: Date,
    },
    paymentNumber: {
      type: String,
      trim: true,
    },
    payment: {
      type: Number,
    },
    renewFee: {
      type: Number,
    },
    renewDate: {
      type: Date,
    },
    fbp: {
      type: String,
      trim: true,
    },
    fbc: {
      type: String,
      trim: true,
    },
    clientIp: {
      type: String,
      trim: true,
    },
    clientUserAgent: {
      type: String,
    },
    eventSourceUrl: {
      type: String,
      trim: true,
    },
    purchaseEventSent: {
      type: Boolean,
      default: false,
    },
    purchaseEventSentAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Index for better performance
LandingRequestSchema.index({ email: 1 });
LandingRequestSchema.index({ phone: 1 });
LandingRequestSchema.index({ status: 1 });
LandingRequestSchema.index({ createdAt: -1 });

// Prevent model recompilation error in development
export default mongoose.models.LandingRequest || mongoose.model<ILandingRequest>("LandingRequest", LandingRequestSchema);
