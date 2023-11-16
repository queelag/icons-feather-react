import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCloudOffElement } from '@aracna/icons-feather-web/elements/cloud-off-element'

export const IconFeatherCloudOff: ElementComponent<IconFeatherCloudOffElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCloudOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-cloud-off', IconFeatherCloudOffElement)
