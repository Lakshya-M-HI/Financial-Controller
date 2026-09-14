import { db } from "../prisma/db.js";

export interface CreateProposalInput {
  userId: number;

  village: string;
  block: string;
  district: string;
  state: string;

  businessCategory: string;
  businessName?: string;

  availableMarginCapital: number;
}

export async function createProposal(
  data: CreateProposalInput
) {
  return db.transaction(async (tx) => {
    // Find existing entrepreneur profile
    let entrepreneur =
      await tx.orm.public.EntrepreneurProfile.first({
          userId: data.userId,
      });

    // Create profile if it doesn't exist
    if (!entrepreneur) {
      entrepreneur =
        await tx.orm.public.EntrepreneurProfile.create({
          userId: data.userId,
          village: data.village,
          block: data.block,
          district: data.district,
          state: data.state,
        });
    }

    // Create business proposal
    const proposal =
      await tx.orm.public.BusinessProposal.create({
        entrepreneurId: entrepreneur.id,
        businessCategory: data.businessCategory,
        businessName: data.businessName,
        availableMarginCapital:
          data.availableMarginCapital,
      });

    return proposal;
  });
}