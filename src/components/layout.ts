import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherLayoutElement } from '@aracna/icons-feather-web/elements/layout-element'

export const IconFeatherLayout: ElementComponent<IconFeatherLayoutElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLayoutElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-layout', IconFeatherLayoutElement)
