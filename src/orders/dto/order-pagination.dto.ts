import { OrderStatus } from "@prisma/client";
import { PaginationDto } from "src/common";
import { OrderStatusList } from "../enum/order.enum";
import { IsEnum, IsOptional } from "class-validator";

export class OrderPaginationDto extends PaginationDto {

    @IsOptional()
    @IsEnum( OrderStatusList,{
        message: `Valid status are: ${OrderStatusList}`
    })
    status: OrderStatus
}