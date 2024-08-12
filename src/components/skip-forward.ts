import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherSkipForwardElement } from '@aracna/icons-feather-web/elements/skip-forward-element'

export const IconFeatherSkipForward: ElementComponent<IconFeatherSkipForwardElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherSkipForwardElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-skip-forward', IconFeatherSkipForwardElement)
