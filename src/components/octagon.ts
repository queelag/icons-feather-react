import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherOctagonElement } from '@aracna/icons-feather-web/elements/octagon-element'

export const IconFeatherOctagon: ElementComponent<IconFeatherOctagonElement, IconProps> = createBaseElementComponent<
  IconFeatherOctagonElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-octagon', IconFeatherOctagonElement)
