# Eurocrypt 21-3
## sf LogStack: Stacked Garbling with O(b log b) Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#sf-logstack-stacked-garbling-with-o-b-log-b-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#sf-logstack-stacked-garbling-with-o-b-log-b-computation)**
### 作者
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> Secure two party computation (2PC) of arbitrary programs can be efficiently achieved using garbled circuits (GC). Until recently, it was widely believed that a GC proportional to the entire program, including parts of the program that are entirely discarded due to conditional branching, must be transmitted over a network. Recent work shows that this belief is false, and that communication proportional only to the longest program execution path suffices (Heath and Kolesnikov, CRYPTO 20, [HK20a]). Although this recent work reduces needed communication, it increases computation. For a conditional with b branches, the players use \(O(b^2)\) computation (traditional GC uses only O(b)).

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_1](https://doi.org/10.1007/978-3-030-77883-5_1)
## Large Scale, Actively Secure Computation from LPN and Free-XOR Garbled Circuits.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#large-scale-actively-secure-computation-from-lpn-and-free-xor-garbled-circuits) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#large-scale-actively-secure-computation-from-lpn-and-free-xor-garbled-circuits)**
### 作者
* Kelong Cong, imec-COSIC, KU Leuven, Leuven, Belgium
* Emmanuela Orsini, imec-COSIC, KU Leuven, Leuven, Belgium
* Nigel P. Smart, imec-COSIC, KU Leuven, Leuven, Belgium
* Aner Ben-Efraim, Department of Computer Science, Ariel Univeristy, Ariel, Israel
* Eran Omri, Department of Computer Science, Ariel Univeristy, Ariel, Israel
* Nigel P. Smart, Department of Computer Science, University of Bristol, Bristol, UK
* Eduardo Soria-Vazquez, Department of Computer Science, Aarhus University, Aarhus, Denmark
### 摘要
> We (MPC) protocol based on garbled circuits which is both actively secure and supports the free-XOR technique, and which has communication complexity O(n) per party. This improves on a protocol of Ben-Efraim, Lindell and Omri which only achieved passive security, without support for free-XOR. Our construction is based on a new variant of LPN-based encryption, but has the drawback of requiring a rather expensive garbling phase. To address this issue we present a second protocol that assumes at least n/c of the parties are honest (for an arbitrary fixed value c). This second protocol allows for a significantly lighter preprocessing, at the cost of a small sacrifice in online efficiency. We demonstrate the practicality of our evaluation phase with an implementation.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_2](https://doi.org/10.1007/978-3-030-77883-5_2)
## Threshold Garbled Circuits and Ad Hoc Secure Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#threshold-garbled-circuits-and-ad-hoc-secure-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#threshold-garbled-circuits-and-ad-hoc-secure-computation)**
### 作者
* Michele Ciampi, The University of Edinburgh, Edinburgh, UK
* Vipul Goyal, NTT Research and CMU, Pittsburgh, PA, USA
* Rafail Ostrovsky, UCLA Department of Computer Science and Department of Mathematics, Los Angeles, CA, USA
### 摘要
> Garbled Circuits (GCs) represent fundamental and powerful tools in cryptography, and many variants of GCs have been considered since their introduction. An important property of the garbled circuits is that they can be evaluated securely if and only if exactly 1 key for each input wire is obtained: no less and no more. In this work we study the case when: 1) some of the wire-keys are missing, but we are still interested in computing the output of the garbled circuit and 2) the evaluator of the GC might have both keys for a constant number of wires. We start to study this question in terms of non-interactive multi-party computation (NIMPC) which is strongly connected with GCs. In this notion there is a fixed number of parties (n) that can get correlated information from a trusted setup. Then these parties can send an encoding of their input to an evaluator, which can compute the output of the function. Similarly to the notion of ad hoc secure computation proposed by Beimel et al. [ITCS 2016], we consider the case when less than n parties participate in the online phase, and in addition we let these parties colluding with the evaluator. We refer to this notion as Threshold NIMPC.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_3](https://doi.org/10.1007/978-3-030-77883-5_3)
## Indistinguishability Obfuscation from Simple-to-State Hard Problems: New Assumptions, New Techniques, and Simplification.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#indistinguishability-obfuscation-from-simple-to-state-hard-problems-new-assumptions-new-techniques-and-simplification) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#indistinguishability-obfuscation-from-simple-to-state-hard-problems-new-assumptions-new-techniques-and-simplification)**
### 作者
* Romain Gay, IBM, Zurich, Switzerland
* Aayush Jain, UCLA, Los Angeles, CA, 90095, USA
* Amit Sahai, UCLA, Los Angeles, CA, 90095, USA
* Huijia Lin, University of Washington, Seattle, WA, 98195, USA
### 摘要
> In this work, we study the question of what set of simple-to-state assumptions suffice for constructing functional encryption and indistinguishability obfuscation (\(i\mathcal {O}\)), supporting all functions describable by polynomial-size circuits. Our work improves over the state-of-the-art work of Jain, Lin, Matt, and Sahai (Eurocrypt 2019) in multiple dimensions.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_4](https://doi.org/10.1007/978-3-030-77883-5_4)
## Candidate Obfuscation via Oblivious LWE Sampling.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#candidate-obfuscation-via-oblivious-lwe-sampling) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#candidate-obfuscation-via-oblivious-lwe-sampling)**
### 作者
* Hoeteck Wee, NTT Research Inc., San Francisco, USA
* Daniel Wichs, NTT Research Inc., San Francisco, USA
* Daniel Wichs, Northeastern University, Boston, USA
### 摘要
> We present a new, simple candidate construction of indistinguishability obfuscation (iO). Our scheme is inspired by lattices and learning-with-errors (LWE) techniques, but we are unable to prove security under a standard assumption. Instead, we formulate a new falsifiable assumption under which the scheme is secure. Furthermore, the scheme plausibly achieves post-quantum security.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_5](https://doi.org/10.1007/978-3-030-77883-5_5)
## Black-Box Non-interactive Non-malleable Commitments.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#black-box-non-interactive-non-malleable-commitments) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#black-box-non-interactive-non-malleable-commitments)**
### 作者
* Rachit Garg, University of Texas at Austin, Austin, USA
* George Lu, University of Texas at Austin, Austin, USA
* Brent Waters, University of Texas at Austin, Austin, USA
* Dakshita Khurana, University of Illinois Urbana-Champaign, Urbana, USA
* Brent Waters, NTT Research, Sunnyvale, USA
### 摘要
> There has been recent exciting progress on building non-interactive non-malleable commitments from judicious assumptions. All proposed approaches proceed in two steps. First, obtain simple “base” commitment schemes for very small tag/identity spaces based on a various sub-exponential hardness assumptions. Next, assuming sub-exponential non-interactive witness indistinguishable proofs (NIWIs), and variants of keyless collision resistant hash functions, construct non-interactive compilers that convert tag-based non-malleable commitments for a small tag space into tag-based non-malleable commitments for a larger tag space.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_6](https://doi.org/10.1007/978-3-030-77883-5_6)
## Non-interactive Distributional Indistinguishability (NIDI) and Non-malleable Commitments.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#non-interactive-distributional-indistinguishability-nidi-and-non-malleable-commitments) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#non-interactive-distributional-indistinguishability-nidi-and-non-malleable-commitments)**
### 作者
* Dakshita Khurana, University of Illinois, Urbana-Champaign, Urbana, USA
### 摘要
> We introduce non-interactive distributionally indistinguishable arguments (NIDI) to address a significant weakness of NIWI proofs: namely, the lack of meaningful secrecy when proving statements about \(\mathsf {NP}\) languages with unique witnesses.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_7](https://doi.org/10.1007/978-3-030-77883-5_7)
## Public-Coin Statistical Zero-Knowledge Batch Verification Against Malicious Verifiers.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#public-coin-statistical-zero-knowledge-batch-verification-against-malicious-verifiers) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#public-coin-statistical-zero-knowledge-batch-verification-against-malicious-verifiers)**
### 作者
* Inbar Kaslasi, Technion, Haifa, Israel
* Ron D. Rothblum, Technion, Haifa, Israel
* Prashant Nalini Vasudevanr, UC Berkeley, Berkeley, USA
### 摘要
> Suppose that a problem \(\varPi \) has a statistical zero-knowledge (\(\mathsf {SZK}\)) proof with communication complexity m. The question of batch verification for \(\mathsf {SZK}\) asks whether one can prove that k instances \(x_1,\dots ,x_k\) all belong to \(\varPi \) with a statistical zero-knowledge proof whose communication complexity is better than \(k \cdot m\) (which is the complexity of the trivial solution of executing the original protocol independently on each input).

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_8](https://doi.org/10.1007/978-3-030-77883-5_8)
## Efficient Range Proofs with Transparent Setup from Bounded Integer Commitments.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#efficient-range-proofs-with-transparent-setup-from-bounded-integer-commitments) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#efficient-range-proofs-with-transparent-setup-from-bounded-integer-commitments)**
### 作者
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Michael Klooß, Karlsruhe Institute for Technology, Karlsruhe, Germany
* Huang Lin, Mercury’s Wing and Suterusu Project, Beijing, China
* Michael Reichle, DIENS, École normale supérieure, CNRS, PSL University, 75005, Paris, France
* Michael Reichle, Inria, Paris, France
### 摘要
> We introduce a new approach for constructing range proofs. Our approach is modular, and leads to highly competitive range proofs under standard assumption, using less communication and (much) less computation than the state of the art methods, and without relying on a trusted setup. Our range proofs can be used as a drop-in replacement in a variety of protocols such as distributed ledgers, anonymous transaction systems, and many more, leading to significant reductions in communication and computation for these applications.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_9](https://doi.org/10.1007/978-3-030-77883-5_9)
## Towards Accountability in CRS Generation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#towards-accountability-in-crs-generation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#towards-accountability-in-crs-generation)**
### 作者
* Prabhanjan Ananth, University of California, Santa Barbara, Santa Barbara, USA
* Gilad Asharov, Bar-Ilan University, Ramat Gan, Israel
* Hila Dahari, Weizmann Institute, Rehovot, Israel
* Vipul Goyal, NTT Research and Carnegie Mellon University, Pittsburgh, USA
### 摘要
> It is well known that several cryptographic primitives cannot be achieved without a common reference string (CRS). Those include, for instance, non-interactive zero-knowledge for NP, or maliciously secure computation in fewer than four rounds. The security of those primitives heavily relies upon on the assumption that the trusted authority, who generates the CRS, does not misuse the randomness used in the CRS generation. However, we argue that there is no such thing as an unconditionally trusted authority and every authority must be held accountable for any trust to be well-founded. Indeed, a malicious authority can, for instance, recover private inputs of honest parties given transcripts of the protocols executed with respect to the CRS it has generated.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_10](https://doi.org/10.1007/978-3-030-77883-5_10)
## Robust Property-Preserving Hash Functions for Hamming Distance and More.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#robust-property-preserving-hash-functions-for-hamming-distance-and-more) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#robust-property-preserving-hash-functions-for-hamming-distance-and-more)**
### 作者
* Nils Fleischhacker, Ruhr University Bochum, Bochum, Germany
* Mark Simkin, Aarhus University, Aarhus, Denmark
### 摘要
> Robust property-preserving hash (PPH) functions, recently introduced by Boyle, Lavigne, and Vaikuntanathan [ITCS 2019], compress large inputs x and y into short digests h(x) and h(y) in a manner that allows for computing a predicate P on x and y while only having access to the corresponding hash values. In contrast to locality-sensitive hash functions, a robust PPH function guarantees to correctly evaluate a predicate on h(x) and h(y) even if x and y are chosen adversarially after seeing h.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_11](https://doi.org/10.1007/978-3-030-77883-5_11)
## Alibi: A Flaw in Cuckoo-Hashing Based Hierarchical ORAM Schemes and a Solution.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#alibi-a-flaw-in-cuckoo-hashing-based-hierarchical-oram-schemes-and-a-solution) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#alibi-a-flaw-in-cuckoo-hashing-based-hierarchical-oram-schemes-and-a-solution)**
### 作者
* Brett Hemenway Falk, University of Pennsylvania, Philadelphia, USA
* Daniel Noble, University of Pennsylvania, Philadelphia, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
### 摘要
> There once was a table of hashes

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_12](https://doi.org/10.1007/978-3-030-77883-5_12)
## Structured Encryption and Dynamic Leakage Suppression.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#structured-encryption-and-dynamic-leakage-suppression) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#structured-encryption-and-dynamic-leakage-suppression)**
### 作者
* Marilyn George, Brown University, Providence, USA
* Seny Kamara, Brown University, Providence, USA
* Tarik Moataz, Aroki Systems, Providence, USA
### 摘要
> Structured encryption (STE) schemes encrypt data structures in such a way that they can be privately queried. Special cases of STE include searchable symmetric encryption (SSE) and graph encryption. Like all sub-linear encrypted search solutions, STE leaks information about queries against persistent adversaries. To address this, a line of work on leakage suppression was recently initiated that focuses on techniques to mitigate the leakage of STE schemes.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_13](https://doi.org/10.1007/978-3-030-77883-5_13)
## Dynamic Ad Hoc Clock Synchronization.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#dynamic-ad-hoc-clock-synchronization) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#dynamic-ad-hoc-clock-synchronization)**
### 作者
* Christian Badertscher, IOHK, Hong Kong, China
* Peter Gaži, IOHK, Hong Kong, China
* Aggelos Kiayias, IOHK, Hong Kong, China
* Alexander Russell, IOHK, Hong Kong, China
* Aggelos Kiayias, University of Edinburgh, Edinburgh, UK
* Alexander Russell, University of Connecticut, Mansfield, USA
* Vassilis Zikas, Purdue University, West Lafayette, USA
### 摘要
> Clock synchronization allows parties to establish a common notion of global time by leveraging a weaker synchrony assumption, i.e., local clocks with approximately the same speed. Despite intensive investigation of the problem in the fault-tolerant distributed computing literature, existing solutions do not apply to settings where participation is unknown, e.g., the ad hoc model of Beimel et al. [EUROCRYPT 17], or is dynamically shifting over time, e.g., the fluctuating/sleepy/dynamic-availability models of Garay et al. [CRYPTO 17], Pass and Shi [ASIACRYPT 17] and Badertscher et al. [CCS 18].

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_14](https://doi.org/10.1007/978-3-030-77883-5_14)
## TARDIS: A Foundation of Time-Lock Puzzles in UC.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#tardis-a-foundation-of-time-lock-puzzles-in-uc) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#tardis-a-foundation-of-time-lock-puzzles-in-uc)**
### 作者
* Carsten Baum, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* Sabine Oechsner, Aarhus University, Aarhus, Denmark
* Bernardo David, IT University of Copenhagen, Copenhagen, Denmark
* Rafael Dowsley, Monash University, Melbourne, Australia
### 摘要
> Time-based primitives like time-lock puzzles (TLP) are finding widespread use in practical protocols, partially due to the surge of interest in the blockchain space where TLPs and related primitives are perceived to solve many problems. Unfortunately, the security claims are often shaky or plainly wrong since these primitives are used under composition. One reason is that TLPs are inherently not UC secure and time is tricky to model and use in the UC model. On the other hand, just specifying standalone notions of the intended task, left alone correctly using standalone notions like non-malleable TLPs only, might be hard or impossible for the given task. And even when possible a standalone secure primitive is harder to apply securely in practice afterwards as its behavior under composition is unclear. The ideal solution would be a model of TLPs in the UC framework to allow simple modular proofs. In this paper we provide a foundation for proving composable security of practical protocols using time-lock puzzles and related timed primitives in the UC model. We construct UC-secure TLPs based on random oracles and show that using random oracles is necessary. In order to prove security, we provide a simple and abstract way to reason about time in UC protocols. Finally, we demonstrate the usefulness of this foundation by constructing applications that are interesting in their own right, such as UC-secure two-party computation with output-independent abort.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_15](https://doi.org/10.1007/978-3-030-77883-5_15)
## On the Power of Multiple Anonymous Messages: Frequency Estimation and Selection in the Shuffle Model of Differential Privacy.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#on-the-power-of-multiple-anonymous-messages-frequency-estimation-and-selection-in-the-shuffle-model-of-differential-privacy) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#on-the-power-of-multiple-anonymous-messages-frequency-estimation-and-selection-in-the-shuffle-model-of-differential-privacy)**
### 作者
* Badih Ghazi, Google Research, Mountain View, USA
* Ravi Kumar, Google Research, Mountain View, USA
* Ameya Velingker, Google Research, Mountain View, USA
* Noah Golowich, MIT EECS, Cambridge, USA
* Rasmus Pagh, BARC and University of Copenhagen, Copenhagen, Denmark
### 摘要
> It is well-known that general secure multi-party computation can in principle be applied to implement differentially private mechanisms over distributed data with utility matching the curator (a.k.a. central) model. In this paper we study the power of protocols running on top of a much weaker primitive: A non-interactive anonymous channel, known as the shuffle model in the differential privacy literature. Such protocols are implementable in a scalable way using known cryptographic methods and are known to enable non-interactive, differentially private protocols with error much smaller than what is possible in the local model. We study fundamental counting problems in the shuffle model and obtain tight, up to polylogarithmic factors, bounds on the error and communication in several settings.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_16](https://doi.org/10.1007/978-3-030-77883-5_16)
## Non-Interactive Anonymous Router.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#non-interactive-anonymous-router) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#non-interactive-anonymous-router)**
### 作者
* Elaine Shi, Carnegie Mellon University, Pittsburgh, USA
* Ke Wu, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> Anonymous routing is one of the most fundamental online privacy problems and has been studied extensively for decades. Almost all known approaches for anonymous routing (e.g., mix-nets, DC-nets, and others) rely on multiple servers or routers to engage in some interactive protocol; and anonymity is guaranteed in the threshold model, i.e., if one or more of the servers/routers behave honestly.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_17](https://doi.org/10.1007/978-3-030-77883-5_17)
## Bifurcated Signatures: Folding the Accountability vs. Anonymity Dilemma into a Single Private Signing Scheme.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#bifurcated-signatures-folding-the-accountability-vs-anonymity-dilemma-into-a-single-private-signing-scheme) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#bifurcated-signatures-folding-the-accountability-vs-anonymity-dilemma-into-a-single-private-signing-scheme)**
### 作者
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Khoa Nguyen, Nanyang Technological University, SPMS, Singapore, Singapore
* Thomas Peters, FNRS and UCLouvain (ICTEAM), Louvain-la-Neuve, Belgium
* Moti Yung, Google and Columbia University, New York City, USA
### 摘要
> Over the development of modern cryptography, often, alternative cryptographic schemes are developed to achieve goals that in some important respect are orthogonal. Thus, we have to choose either a scheme which achieves the first goal and not the second, or vice versa. This results in two types of schemes that compete with each other. In the basic area of user privacy, specifically in anonymous (multi-use credentials) signing, such an orthogonality exists between anonymity and accountability.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_18](https://doi.org/10.1007/978-3-030-77883-5_18)
## Abuse Resistant Law Enforcement Access Systems.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt%2021-3.md#abuse-resistant-law-enforcement-access-systems) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt%2021-3.md#abuse-resistant-law-enforcement-access-systems)**
### 作者
* Matthew Green, Johns Hopkins University, Baltimore, USA
* Gijs Van Laer, Johns Hopkins University, Baltimore, USA
* Gabriel Kaptchuk, Boston University, Boston, USA
### 摘要
> The increasing deployment of end-to-end encrypted communications services has ignited a debate between technology firms and law enforcement agencies over the need for lawful access to encrypted communications. Unfortunately, existing solutions to this problem suffer from serious technical risks, such as the possibility of operator abuse and theft of escrow key material. In this work we investigate the problem of constructing law enforcement access systems that mitigate the possibility of unauthorized surveillance. We first define a set of desirable properties for an abuse-resistant law enforcement access system (ARLEAS), and motivate each of these properties. We then formalize these definitions in the Universal Composability (UC) framework, and present two main constructions that realize this definition. The first construction enables prospective access, allowing surveillance only if encryption occurs after a warrant has been issued and activated. The second, more powerful construction, allows retrospective access to communications that occurred prior to a warrant’s issuance. To illustrate the technical challenge of constructing the latter type of protocol, we conclude by investigating the minimal assumptions required to realize these systems.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77883-5_19](https://doi.org/10.1007/978-3-030-77883-5_19)
