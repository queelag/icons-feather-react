import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCloudRainElement } from '@aracna/icons-feather-web/elements/cloud-rain-element'

export const IconFeatherCloudRain: ElementComponent<IconFeatherCloudRainElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCloudRainElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-cloud-rain', IconFeatherCloudRainElement)
