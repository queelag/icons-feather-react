import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCloudRainElement } from '@aracna/icons-feather-web/elements/cloud-rain-element.js'

export const IconFeatherCloudRain: ElementComponent<IconFeatherCloudRainElement, IconProps> = createBaseElementComponent<
  IconFeatherCloudRainElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-cloud-rain', IconFeatherCloudRainElement)
