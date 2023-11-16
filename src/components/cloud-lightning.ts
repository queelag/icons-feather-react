import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCloudLightningElement } from '@aracna/icons-feather-web/elements/cloud-lightning-element'

export const IconFeatherCloudLightning: ElementComponent<IconFeatherCloudLightningElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCloudLightningElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-cloud-lightning', IconFeatherCloudLightningElement)
