import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherCloudElement } from '@aracna/icons-feather-web/elements/cloud-element'

export const IconFeatherCloud: ElementComponent<IconFeatherCloudElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCloudElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-cloud', IconFeatherCloudElement)
