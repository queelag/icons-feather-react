import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCloudRainElement } from '@aracna/icons-feather-web/elements/cloud-rain-element'

export const IconFeatherCloudRain: ElementComponent<IconFeatherCloudRainElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCloudRainElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-cloud-rain', IconFeatherCloudRainElement)
