import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCloudOffElement } from '@aracna/icons-feather-web/elements/cloud-off-element.js'

export const IconFeatherCloudOff: ElementComponent<IconFeatherCloudOffElement, IconProps> = createBaseElementComponent<
  IconFeatherCloudOffElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-cloud-off', IconFeatherCloudOffElement)
