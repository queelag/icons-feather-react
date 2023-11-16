import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherCopyElement } from '@aracna/icons-feather-web/elements/copy-element'

export const IconFeatherCopy: ElementComponent<IconFeatherCopyElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherCopyElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-copy', IconFeatherCopyElement)
