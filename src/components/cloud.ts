import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCloudElement } from '@aracna/icons-feather-web/elements/cloud-element'

export const IconFeatherCloud: ElementComponent<IconFeatherCloudElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCloudElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-cloud', IconFeatherCloudElement)
