import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCloudLightningElement } from '@aracna/icons-feather-web/elements/cloud-lightning-element'

export const IconFeatherCloudLightning: ElementComponent<IconFeatherCloudLightningElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCloudLightningElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-cloud-lightning', IconFeatherCloudLightningElement)
