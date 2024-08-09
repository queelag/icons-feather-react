import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherOctagonElement } from '@aracna/icons-feather-web/elements/octagon-element'

export const IconFeatherOctagon: ElementComponent<IconFeatherOctagonElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherOctagonElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-octagon', IconFeatherOctagonElement)
