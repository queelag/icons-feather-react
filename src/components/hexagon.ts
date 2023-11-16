import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherHexagonElement } from '@aracna/icons-feather-web/elements/hexagon-element'

export const IconFeatherHexagon: ElementComponent<IconFeatherHexagonElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherHexagonElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-hexagon', IconFeatherHexagonElement)
