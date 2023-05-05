import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCopyElement } from '@aracna/icons-feather-web/elements/copy-element.js'

export const IconFeatherCopy: ElementComponent<IconFeatherCopyElement, IconProps> = createBaseElementComponent<
  IconFeatherCopyElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-copy', IconFeatherCopyElement)
