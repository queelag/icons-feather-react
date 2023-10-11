import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCloudSnowElement } from '@aracna/icons-feather-web/elements/cloud-snow-element'

export const IconFeatherCloudSnow: ElementComponent<IconFeatherCloudSnowElement, IconProps> = createBaseElementComponent<
  IconFeatherCloudSnowElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-cloud-snow', IconFeatherCloudSnowElement)
