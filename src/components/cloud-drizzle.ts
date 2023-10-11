import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCloudDrizzleElement } from '@aracna/icons-feather-web/elements/cloud-drizzle-element'

export const IconFeatherCloudDrizzle: ElementComponent<IconFeatherCloudDrizzleElement, IconProps> = createBaseElementComponent<
  IconFeatherCloudDrizzleElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-cloud-drizzle', IconFeatherCloudDrizzleElement)
