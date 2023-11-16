import { createBaseElementComponent } from '@aracna/react'
import type { AracnaIconProps, ElementComponent } from '@aracna/react'
import type { IconElementAttributes, IconElementEventMap } from '@aracna/web'
import { IconFeatherFeatherElement } from '@aracna/icons-feather-web/elements/feather-element'

export const IconFeatherFeather: ElementComponent<IconFeatherFeatherElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFeatherElement,
  IconElementAttributes,
  IconElementEventMap
>('icon-feather-feather', IconFeatherFeatherElement)
