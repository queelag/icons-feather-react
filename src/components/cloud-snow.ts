import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCloudSnowElement } from '@aracna/icons-feather-web/elements/cloud-snow-element'

export const IconFeatherCloudSnow: ElementComponent<IconFeatherCloudSnowElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCloudSnowElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-cloud-snow', IconFeatherCloudSnowElement)
