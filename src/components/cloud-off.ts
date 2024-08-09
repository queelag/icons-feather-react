import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCloudOffElement } from '@aracna/icons-feather-web/elements/cloud-off-element'

export const IconFeatherCloudOff: ElementComponent<IconFeatherCloudOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCloudOffElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-cloud-off', IconFeatherCloudOffElement)
