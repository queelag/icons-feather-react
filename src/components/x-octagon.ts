import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherXOctagonElement } from '@aracna/icons-feather-web/elements/x-octagon-element'

export const IconFeatherXOctagon: ElementComponent<IconFeatherXOctagonElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherXOctagonElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-x-octagon', IconFeatherXOctagonElement)
