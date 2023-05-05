import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCloudElement } from '@aracna/icons-feather-web/elements/cloud-element.js'

export const IconFeatherCloud: ElementComponent<IconFeatherCloudElement, IconProps> = createBaseElementComponent<
  IconFeatherCloudElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-cloud', IconFeatherCloudElement)
