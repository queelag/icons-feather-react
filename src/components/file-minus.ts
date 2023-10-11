import { createBaseElementComponent } from '@aracna/react'
import type { ElementComponent, IconProps } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFileMinusElement } from '@aracna/icons-feather-web/elements/file-minus-element'

export const IconFeatherFileMinus: ElementComponent<IconFeatherFileMinusElement, IconProps> = createBaseElementComponent<
  IconFeatherFileMinusElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-file-minus', IconFeatherFileMinusElement)
