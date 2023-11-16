import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherOctagonElement } from '@aracna/icons-feather-web/elements/octagon-element'

export const IconFeatherOctagon: ElementComponent<IconFeatherOctagonElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherOctagonElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-octagon', IconFeatherOctagonElement)
