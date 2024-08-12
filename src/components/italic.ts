import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherItalicElement } from '@aracna/icons-feather-web/elements/italic-element'

export const IconFeatherItalic: ElementComponent<IconFeatherItalicElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherItalicElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-italic', IconFeatherItalicElement)
