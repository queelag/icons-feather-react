import type { ElementComponent } from '@aracna/react'
import { AracnaIconProps, createBaseElementComponent } from '@aracna/react-components'
import type { AracnaIconElementAttributes, AracnaIconElementEventMap } from '@aracna/web-components'
import { IconFeatherUnlockElement } from '@aracna/icons-feather-web/elements/unlock-element'

export const IconFeatherUnlock: ElementComponent<IconFeatherUnlockElement, AracnaIconProps> = createBaseElementComponent<
  IconFeatherUnlockElement,
  AracnaIconElementAttributes,
  AracnaIconElementEventMap
>('icon-feather-unlock', IconFeatherUnlockElement)
