import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCloudRainElement } from '@aracna/icons-feather-web/elements/cloud-rain-element'

export const IconFeatherCloudRain: ElementComponent<IconFeatherCloudRainElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCloudRainElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-cloud-rain', IconFeatherCloudRainElement)
