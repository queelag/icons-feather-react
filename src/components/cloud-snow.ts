import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCloudSnowElement } from '@aracna/icons-feather-web/elements/cloud-snow-element'

export const IconFeatherCloudSnow: ElementComponent<IconFeatherCloudSnowElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCloudSnowElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-cloud-snow', IconFeatherCloudSnowElement)
