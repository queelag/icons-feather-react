import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherItalicElement } from '@aracna/icons-feather-web/elements/italic-element'

export const IconFeatherItalic: ElementComponent<IconFeatherItalicElement, IconProps> = createBaseElementComponent<
  IconFeatherItalicElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-italic', IconFeatherItalicElement)
