import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherFeatherElement } from '@aracna/icons-feather-web/elements/feather-element'

export const IconFeatherFeather: ElementComponent<IconFeatherFeatherElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherFeatherElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-feather', IconFeatherFeatherElement)
