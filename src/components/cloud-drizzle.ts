import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCloudDrizzleElement } from '@aracna/icons-feather-web/elements/cloud-drizzle-element'

export const IconFeatherCloudDrizzle: ElementComponent<IconFeatherCloudDrizzleElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCloudDrizzleElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-cloud-drizzle', IconFeatherCloudDrizzleElement)
