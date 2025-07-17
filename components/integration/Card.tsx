import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction, CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Store} from "lucide-react";
import React from "react";

export function SectionCard() {

    return (
        <Card className="@container/card">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                    <Store className="w-5 h-5 text-muted-foreground" />
                    Shopify
                </CardTitle>
                <CardAction>
                    <Badge variant="outline">
                        <IconTrendingUp />
                        +4.5%
                    </Badge>
                </CardAction>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    Магазин: coolstore.myshopify.com
                </p>
                <p
                    className={`mt-2 inline-block px-2 py-0.5 rounded text-xs ${
                        'active' === 'active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-600'
                    }`}
                >
                    Active
                </p>
            </CardContent>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                    Steady performance increase <IconTrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">Meets growth projections</div>
            </CardFooter>
        </Card>
    )
}
