import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCloudLightningElement } from '@aracna/icons-feather-web/elements/cloud-lightning-element'

export const IconFeatherCloudLightning: ElementComponent<IconFeatherCloudLightningElement, IconProps> = createBaseElementComponent<
  IconFeatherCloudLightningElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-cloud-lightning', IconFeatherCloudLightningElement)
