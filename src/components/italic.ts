import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherItalicElement } from '@aracna/icons-feather-web/elements/italic-element'

export const IconFeatherItalic: ElementComponent<IconFeatherItalicElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherItalicElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-italic', IconFeatherItalicElement)
