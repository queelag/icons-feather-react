import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherLayoutElement } from '@aracna/icons-feather-web/elements/layout-element'

export const IconFeatherLayout: ElementComponent<IconFeatherLayoutElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherLayoutElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-layout', IconFeatherLayoutElement)
