import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCloudElement } from '@aracna/icons-feather-web/elements/cloud-element'

export const IconFeatherCloud: ElementComponent<IconFeatherCloudElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCloudElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-cloud', IconFeatherCloudElement)
