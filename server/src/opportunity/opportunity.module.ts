import { Module } from "@nestjs/common";
import { OpportunityModuleBase } from "./base/opportunity.module.base";
import { OpportunityService } from "./opportunity.service";
import { OpportunityController } from "./opportunity.controller";
import { OpportunityResolver } from "./opportunity.resolver";

@Module({
  imports: [OpportunityModuleBase],
  controllers: [OpportunityController],
  providers: [OpportunityService, OpportunityResolver],
  exports: [OpportunityService],
})
export class OpportunityModule {}
